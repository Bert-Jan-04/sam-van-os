import { getMediaPath } from '@/lib/getMediaUrl'
import type { Homepage } from '@/payload-types'

import { ImageSlot } from '@/components/shared/ImageSlot'

type TeamSectionProps = NonNullable<Homepage['team']>

export function TeamSection({ heading, subtext, groupImage, members = [] }: TeamSectionProps) {
  if (!members || members.length === 0) return null

  return (
    <div className="mx-auto max-w-[1200px] px-6 pb-20 md:px-20 md:pb-24">
      {heading && (
        <h2 className="font-display mb-3 text-center text-[26px] text-white uppercase md:text-[32px]">
          {heading}
        </h2>
      )}
      {subtext && (
        <p className="mx-auto mb-8 max-w-[520px] text-center text-[15px] text-caption">
          {subtext}
        </p>
      )}
      <div className="relative mx-auto mb-6 aspect-[4/5] max-w-[400px] overflow-hidden rounded-[20px]">
        <ImageSlot
          alt="Het hele Rebuild team"
          placeholder="groepsfoto: het hele Rebuild team"
          src={getMediaPath(groupImage)}
        />
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {members.map((member, index) => (
          <div
            key={member.id ?? index}
            className="border-navy-border flex flex-col overflow-hidden rounded-[20px] border"
          >
            <div className="relative aspect-[4/5]">
              <ImageSlot
                alt={member.name}
                placeholder={`foto coach ${index + 1}`}
                src={getMediaPath(member.image)}
              />
            </div>
            <div className="flex flex-col gap-1.5 p-[26px]">
              <h3 className="text-[19px] font-bold text-white">{member.name}</h3>
              <span className="text-[13px] font-semibold text-gold-light">{member.role}</span>
              <p className="mt-2 text-[14.5px] leading-relaxed text-muted">{member.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
