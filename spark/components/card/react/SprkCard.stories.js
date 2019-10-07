import React from 'react';
import { withKnobs, boolean, text, object } from '@storybook/addon-knobs';
import SprkCard from './SprkCard';

export default {
  title: 'Components|Card',
  decorators: [withKnobs],
  parameters: { component: SprkCard },
};

export const defaultStory = () => (
  <SprkCard idString="card-1">
    Base Card Content
  </SprkCard>
);

defaultStory.story = {
  name: 'Default',
};

export const standout = () => (
  <SprkCard
    isStandout={boolean('isStandout', true)}
    idString="card-2"
  >
    Standout Card Content
  </SprkCard>
);

standout.story = {
  name: 'Standout',
};

export const highlightedHeader = () => (
  <SprkCard
    idString="card-highlighted-header"
    variant="highlightedHeader"
    highlightedHeaderConfig={object('highlightedHeaderConfig',{
      bodyText:
        'Lorem ipsum dolor sit amet, doctus invenire vix te. Facilisi perpetua an pri, errem commune mea at, mei prima tantas signiferumque at. Numquam.',
      title: 'Card Title',
      description: 'Description',
    })}
  />
);

highlightedHeader.story = {
  name: 'Highlighted Header',
};

export const teaser = () => (
  <SprkCard
    idString="teaser-card"
    variant="teaser"
    teaserConfig={object('teaserConfig', {
      bodyText: 'Lorem ipsum dolor sit amet, doctus invenirevix te. Facilisi perpetua.',
      cta: {
        ctaAnalytics: 'test',
        text: 'Learn More',
        ctaVariant: 'button',
        href: 'https://sparkdesignsystem.com/',
      },
      media: {
        href: 'https://sparkdesignsystem.com/',
        mediaLinkElement: 'a',
        imgAlt: 'placeholder image',
        imgSrc: 'https://spark-assets.netlify.com/desktop.jpg',
        mediaAnalyticsString: 'Card:teaser-link',
        mediaVariant: 'img',
      },
      title: 'Teaser Card Title',
      titleFirst: false,
    })}
  />
);

teaser.story = {
  name: 'Teaser',
};

export const teaserWithDifferentElementOrder = () => (
  <SprkCard
    idString="teaser-card-alt-order"
    variant="teaser"
    teaserConfig={object('teaserConfig', {
      bodyText: 'Lorem ipsum dolor sit amet, doctus invenirevix te. Facilisi perpetua.',
      cta: {
        ctaAnalytics: 'test',
        text: 'Learn More',
        ctaVariant: 'button',
        href: 'https://sparkdesignsystem.com/',
      },
      media: {
        href: 'https://sparkdesignsystem.com/',
        mediaLinkElement: 'a',
        imgAlt: 'placeholder image',
        imgSrc: 'https://spark-assets.netlify.com/desktop.jpg',
        mediaAnalyticsString: 'Card:teaser-link',
        mediaVariant: 'img',
      },
      title: 'Teaser Card Title',
      titleFirst: true,
    })}
  />
);

teaserWithDifferentElementOrder.story = {
  name: 'Teaser With Different Element Order',
};

export const cardLayoutTwoUp = () => (
  <section className="sprk-o-Stack sprk-o-Stack--large sprk-o-Stack--split@l">
    <SprkCard
      idString="card-1"
      variant="teaser"
      additionalClasses="sprk-o-Stack__item sprk-o-Stack__item--flex@l"
      teaserConfig={{
        bodyText: 'Lorem ipsum dolor sit amet, doctus invenirevix te. Facilisi perpetua.',
        cta: {
          ctaAnalytics: 'test',
          text: 'Learn More',
          ctaVariant: 'button',
          href: 'https://sparkdesignsystem.com/',
        },
        media: {
          href: 'https://sparkdesignsystem.com/',
          mediaLinkElement: 'a',
          imgAlt: 'placeholder image',
          imgSrc: 'https://spark-assets.netlify.com/desktop.jpg',
          mediaAnalyticsString: 'Card:teaser-link',
          mediaVariant: 'img',
        },
        title: 'Teaser Card Title',
        titleFirst: true,
      }}
    />
    <SprkCard
      idString="card-2"
      variant="teaser"
      additionalClasses="sprk-o-Stack__item sprk-o-Stack__item--flex@l"
      teaserConfig={{
        bodyText: 'Lorem ipsum dolor sit amet, doctus invenirevix te. Facilisi perpetua.',
        cta: {
          ctaAnalytics: 'test',
          text: 'Learn More',
          ctaVariant: 'button',
          href: 'https://sparkdesignsystem.com/',
        },
        media: {
          href: 'https://sparkdesignsystem.com/',
          mediaLinkElement: 'a',
          imgAlt: 'placeholder image',
          imgSrc: 'https://spark-assets.netlify.com/desktop.jpg',
          mediaAnalyticsString: 'Card:teaser-link',
          mediaVariant: 'img',
        },
        title: 'Teaser Card Title',
        titleFirst: true,
      }}
    />
  </section>
);

cardLayoutTwoUp.story = {
  name: 'Card Layout - Two up',
};

export const cardLayoutThreeUp = () => (
  <section className="sprk-o-Stack sprk-o-Stack--large sprk-o-Stack--split@l">
    <SprkCard
      idString="card-1"
      variant="teaser"
      additionalClasses="sprk-o-Stack__item sprk-o-Stack__item--flex@l"
      teaserConfig={{
        bodyText: 'Lorem ipsum dolor sit amet, doctus invenirevix te. Facilisi perpetua.',
        cta: {
          ctaAnalytics: 'test',
          text: 'Learn More',
          ctaVariant: 'button',
          href: 'https://sparkdesignsystem.com/',
        },
        media: {
          href: 'https://sparkdesignsystem.com/',
          mediaLinkElement: 'a',
          imgAlt: 'placeholder image',
          imgSrc: 'https://spark-assets.netlify.com/desktop.jpg',
          mediaAnalyticsString: 'Card:teaser-link',
          mediaVariant: 'img',
        },
        title: 'Teaser Card Title',
        titleFirst: true,
      }}
    />
    <SprkCard
      idString="card-2"
      variant="teaser"
      additionalClasses="sprk-o-Stack__item sprk-o-Stack__item--flex@l"
      teaserConfig={{
        bodyText: 'Lorem ipsum dolor sit amet, doctus invenirevix te. Facilisi perpetua.',
        cta: {
          ctaAnalytics: 'test',
          text: 'Learn More',
          ctaVariant: 'button',
          href: 'https://sparkdesignsystem.com/',
        },
        media: {
          href: 'https://sparkdesignsystem.com/',
          mediaLinkElement: 'a',
          imgAlt: 'placeholder image',
          imgSrc: 'https://spark-assets.netlify.com/desktop.jpg',
          mediaAnalyticsString: 'Card:teaser-link',
          mediaVariant: 'img',
        },
        title: 'Teaser Card Title',
        titleFirst: true,
      }}
    />
    <SprkCard
      idString="card-3"
      variant="teaser"
      additionalClasses="sprk-o-Stack__item sprk-o-Stack__item--flex@l"
      teaserConfig={{
        bodyText: 'Lorem ipsum dolor sit amet, doctus invenirevix te. Facilisi perpetua.',
        cta: {
          ctaAnalytics: 'test',
          text: 'Learn More',
          ctaVariant: 'button',
          href: 'https://sparkdesignsystem.com/',
        },
        media: {
          href: 'https://sparkdesignsystem.com/',
          mediaLinkElement: 'a',
          imgAlt: 'placeholder image',
          imgSrc: 'https://spark-assets.netlify.com/desktop.jpg',
          mediaAnalyticsString: 'Card:teaser-link',
          mediaVariant: 'img',
        },
        title: 'Teaser Card Title',
        titleFirst: true,
      }}
    />
  </section>
);

cardLayoutThreeUp.story = {
  name: 'Card Layout - Three up',
};

export const cardLayoutFourUp = () => (
  <section className="sprk-o-Stack sprk-o-Stack--large sprk-o-Stack--split@l">
    <SprkCard
      idString="card-1"
      variant="teaser"
      additionalClasses="sprk-o-Stack__item sprk-o-Stack__item--flex@l"
      teaserConfig={{
        bodyText: 'Lorem ipsum dolor sit amet, doctus invenirevix te. Facilisi perpetua.',
        cta: {
          ctaAnalytics: 'test',
          text: 'Learn More',
          ctaVariant: 'button',
          href: 'https://sparkdesignsystem.com/',
        },
        media: {
          href: 'https://sparkdesignsystem.com/',
          mediaLinkElement: 'a',
          imgAlt: 'placeholder image',
          imgSrc: 'https://spark-assets.netlify.com/desktop.jpg',
          mediaAnalyticsString: 'Card:teaser-link',
          mediaVariant: 'img',
        },
        title: 'Teaser Card Title',
        titleFirst: true,
      }}
    />
    <SprkCard
      idString="card-2"
      variant="teaser"
      additionalClasses="sprk-o-Stack__item sprk-o-Stack__item--flex@l"
      teaserConfig={{
        bodyText: 'Lorem ipsum dolor sit amet, doctus invenirevix te. Facilisi perpetua.',
        cta: {
          ctaAnalytics: 'test',
          text: 'Learn More',
          ctaVariant: 'button',
          href: 'https://sparkdesignsystem.com/',
        },
        media: {
          href: 'https://sparkdesignsystem.com/',
          mediaLinkElement: 'a',
          imgAlt: 'placeholder image',
          imgSrc: 'https://spark-assets.netlify.com/desktop.jpg',
          mediaAnalyticsString: 'Card:teaser-link',
          mediaVariant: 'img',
        },
        title: 'Teaser Card Title',
        titleFirst: true,
      }}
    />
    <SprkCard
      idString="card-3"
      variant="teaser"
      additionalClasses="sprk-o-Stack__item sprk-o-Stack__item--flex@l"
      teaserConfig={{
        bodyText: 'Lorem ipsum dolor sit amet, doctus invenirevix te. Facilisi perpetua.',
        cta: {
          ctaAnalytics: 'test',
          text: 'Learn More',
          ctaVariant: 'button',
          href: 'https://sparkdesignsystem.com/',
        },
        media: {
          href: 'https://sparkdesignsystem.com/',
          mediaLinkElement: 'a',
          imgAlt: 'placeholder image',
          imgSrc: 'https://spark-assets.netlify.com/desktop.jpg',
          mediaAnalyticsString: 'Card:teaser-link',
          mediaVariant: 'img',
        },
        title: 'Teaser Card Title',
        titleFirst: true,
      }}
    />
    <SprkCard
      idString="card-4"
      variant="teaser"
      additionalClasses="sprk-o-Stack__item sprk-o-Stack__item--flex@l"
      teaserConfig={{
        bodyText: 'Lorem ipsum dolor sit amet, doctus invenirevix te. Facilisi perpetua.',
        cta: {
          ctaAnalytics: 'test',
          text: 'Learn More',
          ctaVariant: 'button',
          href: 'https://sparkdesignsystem.com/',
        },
        media: {
          href: 'https://sparkdesignsystem.com/',
          mediaLinkElement: 'a',
          imgAlt: 'placeholder image',
          imgSrc: 'https://spark-assets.netlify.com/desktop.jpg',
          mediaAnalyticsString: 'Card:teaser-link',
          mediaVariant: 'img',
        },
        title: 'Teaser Card Title',
        titleFirst: true,
      }}
    />
  </section>
);

cardLayoutFourUp.story = {
  name: 'Card Layout - Four up',
};
