// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import { data } from 'autoprefixer';

type Data = {
  email: string;
  message: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email, message } = req.body as Data

  if(!req.body) return res.status(500).json({result: 'Nice try :)'})

  if (message.length < 1 || email.length < 1) return res.status(500).json({ result: "FIELD_EMPTY" });
  if (message.length > 1000) return res.status(500).json({ result: "MESSAGE_TOO_LONG" });
  if (email.length > 500) return res.status(500).json({ result: "NAME_TOO_LONG" });


  axios.post(process.env.WEBHOOK_URL as string, {
    embeds: [{
      color: 3108090,
      title: email,
      author: {
        name: req.headers["x-forwarded-for"] ?? req.socket.remoteAddress ?? "unknown!?",
      },
      description: message,
    }]
  }).then(response => {
    if(response.data.error) return res.status(500).json({ result: "DISCORD_API_ERROR" });
    return res.status(200).json({ result: "Success" });
  }) 
}
