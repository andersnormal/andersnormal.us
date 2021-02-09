import type { NextApiRequest, NextApiResponse } from 'next'
import { IncomingWebhook } from '@slack/webhook'

type Data = {
  message: string
  status: boolean
}

export default async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
): Promise<void> => {
  const url = process.env.SLACK_WEBHOOK_URL
  const webhook = new IncomingWebhook(url)

  const { name, business_name, email } = req.body

  try {
    await webhook.send({
      text: 'Contact Request',
      blocks: [
        {
          type: 'section',
          fields: [
            {
              type: 'plain_text',
              text: name
            },
            {
              type: 'plain_text',
              text: business_name
            },
            {
              type: 'plain_text',
              text: email
            }
          ]
        }
      ]
    })
  } catch (error) {
    return res.status(500).send({ message: error, status: false })
  }

  res.status(200).send({ message: 'send sucessfully', status: true })
}
