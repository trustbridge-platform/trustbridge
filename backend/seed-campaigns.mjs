import { getDB } from './src/config/database.js';

function seed() {
  const db = getDB();
  const count = db.prepare('SELECT COUNT(*) as c FROM campaigns').get().c;
  if (count > 0) {
    console.log(`Campaigns already seeded (${count} rows). Skipping.`);
    return;
  }
  const now = Date.now();
  const day = 24 * 60 * 60 * 1000;
  const campaigns = [
    {
      title: 'Clean Water for Yemen',
      description: 'Provide sustainable clean water solutions to communities in Yemen.',
      organization: 'Mercy Wells',
      category: 'Food & Water',
      goal: 120000,
      raised: 84200,
      donors: 1284,
      end_date: new Date(now + 12 * day).toISOString(),
      urgent: 1,
      status: 'active',
      image: 'https://res.cloudinary.com/ml67lr3d/image/upload/v1720000000/trustbridge/yemen-water.jpg',
      creator_id: null,
    },
    {
      title: 'Earthquake Relief Türkiye',
      description: 'Emergency relief and rebuilding support for earthquake-affected regions.',
      organization: 'Global Aid Network',
      category: 'Disaster Relief',
      goal: 250000,
      raised: 198400,
      donors: 4820,
      end_date: new Date(now + 4 * day).toISOString(),
      urgent: 1,
      status: 'active',
      image: 'https://res.cloudinary.com/ml67lr3d/image/upload/v1720000000/trustbridge/turkiye-quake.jpg',
      creator_id: null,
    },
  ];
  const stmt = db.prepare(
    `INSERT INTO campaigns (title, description, organization, category, goal, raised, donors, end_date, urgent, status, image, creator_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
  );
  for (const c of campaigns) {
    stmt.run(c.title, c.description, c.organization, c.category, c.goal, c.raised, c.donors, c.end_date, c.urgent, c.status, c.image, c.creator_id);
  }
  console.log('Seeded campaigns:', campaigns.length);
}

seed().catch((err) => {
  console.error('Seed failed:', err);
  process.exit(1);
});