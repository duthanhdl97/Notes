import 'antd/dist/antd.css'
import HomeLayout from '~/components/layouts/HomeLayout'

function MyApp({ Component, pageProps }) {
  return (
    <HomeLayout>
      <Component {...pageProps} />
    </HomeLayout>
  )
}

export default MyApp
