import { redirect } from "@remix-run/node";
import { decrypt } from '../util/crypto'
import { prisma } from '../util/prisma'

export async function loader({params}) {
  let email
  try {
    email = decrypt(params.confirm)
  } catch(e) {
    return redirect("/")
  }

  const rec = await prisma.mailingList.update({
    where: {
      email: email,
    },
    data: {
      active: true,
    },
  })

  return redirect("/?newslettersuccess=true")
}

export default function Index() {
  return (<></>)
}
