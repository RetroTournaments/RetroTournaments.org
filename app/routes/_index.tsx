import Navbar from '../components/Navbar'

export function meta() {
  return [
    { title: "Retro Tournaments" },
    { name: "description", content: "Retro Tournaments Landing Page" },
  ];
}

export default function Index() {
  return (
    <>
      <Navbar />
    </>
  )
}
