'use client';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Linkedin, Github, Twitter } from 'lucide-react';

export default function AboutUs() {
  const t = useTranslations('About');

  const team = [
    {
      name: t('mouadName'),
      role: t('mouadRole'),
      description: t('mouadDesc'),
      image: '/team/mouad.jpg', // Replace with your image path
      socials: {
        linkedin: 'https://linkedin.com/in/mouad', // Replace with your link
        github: 'https://github.com/mouad',       // Replace with your link
        twitter: 'https://twitter.com/mouad',     // Replace with your link
      },
    },
    {
      name: t('inassName'),
      role: t('inassRole'),
      description: t('inassDesc'),
      image: '/team/inass.jpg', // Replace with your partner's image path
      socials: {
        linkedin: 'https://linkedin.com/in/inass', // Replace with partner's link
        github: 'https://github.com/inass',       // Replace with partner's link
        twitter: 'https://twitter.com/inass',     // Replace with partner's link
      },
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <div
              key={index}
              className="group bg-gray-50 rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100"
            >
              <div className="relative w-32 h-32 mx-auto mb-6">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={128}
                  height={128}
                  className="rounded-full object-cover shadow-lg border-4 border-white"
                />
                <div className="absolute bottom-0 right-0 bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold shadow-md">
                  {member.name.charAt(0)}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900">{member.name}</h3>
              <p className="text-blue-600 font-semibold mb-4">{member.role}</p>
              <p className="text-gray-600 mb-6">{member.description}</p>

              {/* Social Links */}
              <div className="flex justify-center gap-4">
                <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-700 transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href={member.socials.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 transition-colors">
                  <Github size={24} />
                </a>
                <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-sky-500 transition-colors">
                  <Twitter size={24} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}