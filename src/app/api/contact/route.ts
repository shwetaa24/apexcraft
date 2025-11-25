import { NextResponse } from 'next/server'
import { Resend } from 'resend'

type ContactRequest = {
  name: string
  phone: string
  email: string
  projectType: string
  message: string
}

const requiredFields: Array<keyof ContactRequest> = [
  'name',
  'phone',
  'email',
  'projectType',
  'message',
]

const resendApiKey = process.env.RESEND_API_KEY
const fromAddress = process.env.RESEND_FROM
const recipient = process.env.CONTACT_RECIPIENT
const resendClient = resendApiKey ? new Resend(resendApiKey) : null

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<ContactRequest>

    const missing = requiredFields.filter((field) => !body[field]?.toString().trim())
    if (missing.length > 0) {
      return NextResponse.json(
        {
          success: false,
          error: `Missing required fields: ${missing.join(', ')}`,
        },
        { status: 400 },
      )
    }

    if (!resendClient || !fromAddress || !recipient) {
      throw new Error('Missing Resend configuration. Please check RESEND_API_KEY, RESEND_FROM, and CONTACT_RECIPIENT.')
    }

    await resendClient.emails.send({
      from: fromAddress,
      to: recipient,
      replyTo: body.email ?? undefined,
      subject: `New Consultation Request from ${body.name}`,
      text: `You have a new consultation request:

Name: ${body.name}
Email: ${body.email}
Phone: ${body.phone}
Project Type: ${body.projectType}

Message:
${body.message}
`,
      html: `
        <h2>New Consultation Request</h2>
        <p>You have received a new consultation request via the website:</p>
        <ul>
          <li><strong>Name:</strong> ${body.name}</li>
          <li><strong>Email:</strong> ${body.email}</li>
          <li><strong>Phone:</strong> ${body.phone}</li>
          <li><strong>Project Type:</strong> ${body.projectType}</li>
        </ul>
        <p><strong>Message:</strong></p>
        <p>${body.message?.replace(/\n/g, '<br />')}</p>
      `,
    })

    console.info('[contact] submission delivered', {
      name: body.name,
      email: body.email,
      phone: body.phone,
      projectType: body.projectType,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('[contact] failed to process submission', error)
    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : 'Unable to process your request right now.',
      },
      { status: 500 },
    )
  }
}

