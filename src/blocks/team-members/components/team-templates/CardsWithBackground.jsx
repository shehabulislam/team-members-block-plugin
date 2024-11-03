const TeamMember = ({ member, bgColor }) => (
    <div className={`rounded-2xl overflow-hidden shadow-lg ${bgColor}`}>
      <img
        src={member.imageUrl}
        alt={member.name}
        width={400}
        height={400}
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
        <p className="text-gray-600 mb-4">{member.role}</p>
        <div className="flex space-x-3">
          <a
            href={member.twitterUrl}
            className="text-gray-400 hover:text-blue-500 transition-colors"
            aria-label={`${member.name}'s Twitter`}
          >
            <span className="w-5 h-5" />
          </a>
          <a
            href={member.instagramUrl}
            className="text-gray-400 hover:text-pink-500 transition-colors"
            aria-label={`${member.name}'s Instagram`}
          >
            <span className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  )
  
  export default function TeamSection({members}) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Meet our team</h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            These people work on making our product best.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TeamMember member={members[0]} bgColor="bg-white" />
            <TeamMember member={members[1]} bgColor="bg-indigo-500" />
            <TeamMember member={members[2]} bgColor="bg-white" />
          </div>
        </div>
      </section>
    )
  }