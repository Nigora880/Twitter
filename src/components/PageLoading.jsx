import { Logo } from "../assets/img"

const PageLoading = () => {
  return (
    <div className="fixed right-0 left-0 top-0 bottom-0 flex justify-center items-center">
      <img className="loading-img" src={Logo} alt="logo" width={100} height={100} />
    </div>
  )
}

export default PageLoading
