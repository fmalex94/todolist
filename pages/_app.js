import TareaState from '../context/tareaState'

function MyApp({ Component, pageProps }) {
  return (
    <TareaState>
      <Component {...pageProps} />
    </TareaState>
    )
}

export default MyApp
