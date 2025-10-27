'use client'

import { Facebook, Twitter, Linkedin, Link as LinkIcon, Mail } from 'lucide-react'
import { useState } from 'react'

interface ShareButtonsProps {
  title: string
  slug: string
}

export default function ShareButtons({ title, slug }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false)
  const url = `https://forevermemories.fr/blog/${slug}`
  const encodedTitle = encodeURIComponent(title)
  const encodedUrl = encodeURIComponent(url)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    email: `mailto:?subject=${encodedTitle}&body=Je%20pensais%20que%20cet%20article%20pourrait%20t'intéresser%20:%20${encodedUrl}`,
  }

  return (
    <div className="bg-white rounded-2xl p-6 border-2 border-gray-100">
      <h3 className="font-bold text-lg mb-4 text-dark">Partager l'article</h3>
      <div className="flex flex-col gap-3">
        <a
          href={shareLinks.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-3 rounded-xl border-2 border-gray-100 hover:border-[#1877F2] hover:bg-[#1877F2]/5 transition-all group"
        >
          <div className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center text-white">
            <Facebook size={20} />
          </div>
          <span className="font-medium text-gray-700 group-hover:text-[#1877F2]">Facebook</span>
        </a>

        <a
          href={shareLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-3 rounded-xl border-2 border-gray-100 hover:border-[#1DA1F2] hover:bg-[#1DA1F2]/5 transition-all group"
        >
          <div className="w-10 h-10 rounded-full bg-[#1DA1F2] flex items-center justify-center text-white">
            <Twitter size={20} />
          </div>
          <span className="font-medium text-gray-700 group-hover:text-[#1DA1F2]">Twitter</span>
        </a>

        <a
          href={shareLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-3 rounded-xl border-2 border-gray-100 hover:border-[#0A66C2] hover:bg-[#0A66C2]/5 transition-all group"
        >
          <div className="w-10 h-10 rounded-full bg-[#0A66C2] flex items-center justify-center text-white">
            <Linkedin size={20} />
          </div>
          <span className="font-medium text-gray-700 group-hover:text-[#0A66C2]">LinkedIn</span>
        </a>

        <a
          href={shareLinks.email}
          className="flex items-center gap-3 p-3 rounded-xl border-2 border-gray-100 hover:border-primary hover:bg-primary/5 transition-all group"
        >
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
            <Mail size={20} />
          </div>
          <span className="font-medium text-gray-700 group-hover:text-primary">Email</span>
        </a>

        <button
          onClick={copyToClipboard}
          className="flex items-center gap-3 p-3 rounded-xl border-2 border-gray-100 hover:border-primary hover:bg-primary/5 transition-all group"
        >
          <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white">
            <LinkIcon size={20} />
          </div>
          <span className="font-medium text-gray-700 group-hover:text-primary">
            {copied ? 'Copié !' : 'Copier le lien'}
          </span>
        </button>
      </div>
    </div>
  )
}
