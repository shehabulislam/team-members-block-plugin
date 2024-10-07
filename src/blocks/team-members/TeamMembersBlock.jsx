import { InnerBlocks, useBlockProps } from '@wordpress/block-editor'
import { __ } from '@wordpress/i18n'
import React from 'react'

export default function TeamMembersBlock() {
  const blockProps = useBlockProps({
    className: 'tmbp-team-members-block', 
  })

  return (
    <div {...blockProps}>
      <div className="tmbp-container max-w-screen-xl mx-auto px-3">
        <h2 className="tmbp-title text-2xl font-bold text-center mb-8">
          {__('Our Team', 'team-members-block-plugin')}
        </h2>
        <div className="tmbp-team-members-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 grid-cols-4">
          <InnerBlocks
            allowedBlocks={['core/group']}
            template={[
              ['core/group', { className: 'tmbp-team-member' }, [
                ['core/image', {
                  className: 'tmbp-team-member-image w-48 h-48 rounded-full object-cover mx-auto mb-4',
                  sizeSlug: 'full',
                }],
                ['core/heading', {
                  level: 3,
                  className: 'tmbp-team-member-name text-xl font-bold text-center mb-2',
                  placeholder: __('Member Name', 'team-members-block-plugin'),
                }],
                ['core/paragraph', {
                  className: 'tmbp-team-member-position text-gray-600 text-center',
                  placeholder: __('Member Position', 'team-members-block-plugin'),
                }],
                ['core/paragraph', {
                  className: 'tmbp-team-member-bio text-center mt-4',
                  placeholder: __('Member Bio', 'team-members-block-plugin'),
                }],
                ['core/social-links', {
                  className: 'tmbp-team-member-social flex justify-center mt-4',
                }, [
                  ['core/social-link', { service: 'linkedin' }],
                  ['core/social-link', { service: 'twitter' }],
                ]],
              ]],
              ['core/group', { className: 'tmbp-team-member' }, [
                ['core/image', {
                  className: 'tmbp-team-member-image w-48 h-48 rounded-full object-cover mx-auto mb-4',
                  sizeSlug: 'full',
                }],
                ['core/heading', {
                  level: 3,
                  className: 'tmbp-team-member-name text-xl font-bold text-center mb-2',
                  placeholder: __('Member Name', 'team-members-block-plugin'),
                }],
                ['core/paragraph', {
                  className: 'tmbp-team-member-position text-gray-600 text-center',
                  placeholder: __('Member Position', 'team-members-block-plugin'),
                }],
                ['core/paragraph', {
                  className: 'tmbp-team-member-bio text-center mt-4',
                  placeholder: __('Member Bio', 'team-members-block-plugin'),
                }],
                ['core/social-links', {
                  className: 'tmbp-team-member-social flex justify-center mt-4',
                }, [
                  ['core/social-link', { service: 'linkedin' }],
                  ['core/social-link', { service: 'twitter' }],
                ]],
              ]],
              ['core/group', { className: 'tmbp-team-member' }, [
                ['core/image', {
                  className: 'tmbp-team-member-image w-48 h-48 rounded-full object-cover mx-auto mb-4',
                  sizeSlug: 'full',
                }],
                ['core/heading', {
                  level: 3,
                  className: 'tmbp-team-member-name text-xl font-bold text-center mb-2',
                  placeholder: __('Member Name', 'team-members-block-plugin'),
                }],
                ['core/paragraph', {
                  className: 'tmbp-team-member-position text-gray-600 text-center',
                  placeholder: __('Member Position', 'team-members-block-plugin'),
                }],
                ['core/paragraph', {
                  className: 'tmbp-team-member-bio text-center mt-4',
                  placeholder: __('Member Bio', 'team-members-block-plugin'),
                }],
                ['core/social-links', {
                  className: 'tmbp-team-member-social flex justify-center mt-4',
                }, [
                  ['core/social-link', { service: 'linkedin' }],
                  ['core/social-link', { service: 'twitter' }],
                ]],
              ]],
            ]}
          />
        </div>
      </div>
    </div>
  )
}