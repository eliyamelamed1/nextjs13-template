import { Tune } from '@mui/icons-material'

export default async function Home() {
  await new Promise((res) => {
    setTimeout(() => {
      res({})
    }, 5000)
  })

  return (
    <div>
      <Tune />
    </div>
  )
}
