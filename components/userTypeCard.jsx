function UserTypeCard({ imageSrc, title, description }) {
    return (
      <div className="text-center">
        <div className="w-24 h-24 mx-auto mb-6">
          <img src={imageSrc} alt="" className="w-full h-full object-contain" />
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    )
  }

  export default UserTypeCard