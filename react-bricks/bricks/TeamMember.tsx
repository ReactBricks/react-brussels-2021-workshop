import React from 'react'
import { Text, RichText, Image, types } from 'react-bricks'
import { FaTwitter, FaLinkedin } from 'react-icons/fa'

//=============================
// Local Types
//=============================

interface TeamMemberProps {
  twitterUrl: string
  linkedinUrl: string
}

//=============================
// Component to be rendered
//=============================
const TeamMember: types.Brick<TeamMemberProps> = ({
  twitterUrl,
  linkedinUrl,
  ...rest
}) => {
  return (
    <div {...rest} className="p-6 sm:w-1/3">
      <Image
        propName="photo"
        alt="Team member"
        maxWidth={300}
        aspectRatio={1}
        containerClassName="mb-6 flex justify-center items-center"
        imageClassName="rounded-full w-56 border"
      />
      <Text
        propName="name"
        placeholder="Name..."
        renderBlock={({ children }) => (
          <h2 className="text-center text-xl font-bold text-gray-900 dark:text-white">
            {children}
          </h2>
        )}
      />
      <Text
        propName="role"
        placeholder="Role..."
        renderBlock={({ children }) => (
          <h3 className="text-center text-lg text-blue-600 dark:text-gray-400">
            {children}
          </h3>
        )}
      />
      {(twitterUrl || linkedinUrl) && (
        <div className="flex justify-center space-x-4 text-xl mt-2">
          {twitterUrl && (
            <a href={twitterUrl} className="text-gray-400 hover:text-gray-500">
              <FaTwitter />
            </a>
          )}
          {linkedinUrl && (
            <a href={linkedinUrl} className="text-gray-400 hover:text-gray-500">
              <FaLinkedin />
            </a>
          )}
        </div>
      )}
    </div>
  )
}

//=============================
// Brick Schema
//=============================
TeamMember.schema = {
  name: 'team-member-ws',
  hideFromAddMenu: true,
  category: 'Workshop',
  tags: ['team-member'],
  label: 'Team member',
  getDefaultProps: () => ({
    name: 'Joe Doe',
    role: 'Frontend developer',
    twitterUrl: '',
    linkedinUrl: '',
    photo: {
      src: 'https://images.reactbricks.com/original/e54a6078-6312-4159-8705-c18ac340b117.svg',
      placeholderSrc:
        'https://images.reactbricks.com/original/e54a6078-6312-4159-8705-c18ac340b117.svg',
      srcSet: '',
      width: 1249.24,
      height: 1249.24,
      alt: 'Team member',
      seoName: '',
    },
  }),
  sideEditProps: [
    {
      name: 'twitterUrl',
      label: 'Twitter URL',
      type: types.SideEditPropType.Text,
      validate: (value) => !value || value.startsWith('https') || 'Invalid URL',
    },
    {
      name: 'linkedinUrl',
      label: 'Linkedin URL',
      type: types.SideEditPropType.Text,
      validate: (value) => !value || value.startsWith('https') || 'Invalid URL',
    },
  ],
}

export default TeamMember
