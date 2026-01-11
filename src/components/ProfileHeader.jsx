function ProfileHeader() {
  return (
    <div className="flex flex-col items-center text-center gap-4">
      <img
        src="/src/assets/profile.jpeg"
        alt="Perfil"
        className="w-28 h-28 rounded-full border-4 border-indigo-900 mt-4"
      />
      <h1 className="text-2xl font-bold">Washington Medeiros</h1>
      <p className="text-gray-700">Acesse minhas redes!</p>
    </div>
  );
}

export default ProfileHeader;
