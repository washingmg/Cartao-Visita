import profileImg from '../assets/profile.jpeg'

export default function ProfileHeader() {
  return (
    <div className="flex flex-col items-center text-center gap-4">
      <img
        src={profileImg}
        alt="Perfil"
        className="w-30 h-28 rounded-full border-4 border-[#235347] mt-4"
      />
      <h1 className="text-2xl font-bold">Washington Medeiros</h1>
      <p className="text-[#0c6457] font-bold">Acesse minhas redes!</p>
    </div>
  )
}
