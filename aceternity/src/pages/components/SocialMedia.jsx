import React from 'react'

const socialMediaPlatforms = [
  { name: 'instagram', src: '/socialmedia/ff5ae72f423c7a1a2e6daf347ff1b5e2-removebg-preview.png' },
  { name: 'tiktok', src: '/socialmedia/images-removebg-preview.png' },
  { name: 'twitter', src: '/socialmedia/twitter.png' },
  { name: 'facebook', src: '/socialmedia/pngimg.com_-_facebook_logos_PNG19753-removebg-preview.png' },
  { name: 'meta', src: '/socialmedia/meta.png' },
  { name: 'linkedin', src: '/socialmedia/linkedin.png' },
  { name: 'slack', src: '/socialmedia/slack.png' },
  { name: 'meta', src: '/socialmedia/meta.png' },
  { name: 'linkedin', src: '/socialmedia/linkedin.png' },
  { name: 'slack', src: '/socialmedia/slack.png' },
  { name: 'instagram', src: '/socialmedia/ff5ae72f423c7a1a2e6daf347ff1b5e2-removebg-preview.png' },
  { name: 'tiktok', src: '/socialmedia/images-removebg-preview.png' },
  { name: 'twitter', src: '/socialmedia/twitter.png' },
]

export default function SocialMediaComponent() {
  return (
    <div className="w-full max-w-3xl bg-[#121212] text-white p-8 rounded-2xl relative overflow-hidden">
      <div className="relative z-10">
        <h2 className="text-3xl font-bold mb-2">Post to multiple platforms at once</h2>
        <p className="text-gray-400 mb-8">
          With our AI-powered platform, you can post to multiple platforms at once, saving you time and effort.
        </p>
        <div className="relative">
          <svg
            className="absolute top-0 left-0 w-full h-full"
            viewBox="0 0 400 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 100 C100 10, 300 190, 400 100"
              stroke="rgba(59, 130, 246, 0.5)"
              strokeWidth="2"
              fill="none"
            />
          </svg>
          <div className="grid grid-cols-7 gap-6 mb-10">
            {socialMediaPlatforms.slice(0, 7).map((platform, index) => (
              <IconCard key={`top-${index}`} platform={platform} />
            ))}
          </div>
          <div className="grid grid-cols-6 gap-6">
            {socialMediaPlatforms.slice(7).map((platform, index) => (
              <IconCard key={`bottom-${index}`} platform={platform} />
            ))}
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-50"></div>
    </div>
  )
}

function IconCard({ platform }) {
  return (
    <div className="bg-[#1e1e1e] p-4 rounded-2xl flex items-center justify-center relative group">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative z-10">
        <img 
        loading="lazy"
          src={platform.src} 
          alt={`${platform.name} icon`}
          className="w-8 h-8 object-contain"
        />
      </div>
    </div>
  )
}