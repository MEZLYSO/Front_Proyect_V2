function Profile() {
  return (
    <>
      <div
        className="bg-white pt-5">
        <h1
          className="text-center text-2xl font-bold">
          Perfil
        </h1>
        <div>
          <form>
            <input type="text" />
            <input type="text" />
          </form>
          <div className="w-full flex justify-center">
            <button className="bg-red-400 text-white rounded-4xl px-5 text-xl font-bold">
              Cerrar sesion
            </button>
          </div>
        </div>
      </div>
    </>

  )
}

export default Profile
