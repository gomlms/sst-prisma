import { truncateAllTables } from '@backend/db/seed/truncate';
import { Prisma } from '@prisma/client';

const { prisma } = await import('@backend/db/clientSync');

export async function seedFakerSampleData() {
  prisma.$transaction(startSeeding, { maxWait: 30_000, timeout: 60_000 });
}

export async function startSeeding(prisma: Prisma.TransactionClient) {
  if (process.env.CLEAN_SEED) {
    // Remove old data
    truncateAllTables(prisma);
  }

  // Here you can start seeding your DB
}