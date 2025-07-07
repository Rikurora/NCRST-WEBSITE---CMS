<?php

namespace App\Repository;

use App\Entity\ResearchGrant;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<ResearchGrant>
 *
 * @method ResearchGrant|null find($id, $lockMode = null, $lockVersion = null)
 * @method ResearchGrant|null findOneBy(array $criteria, array $orderBy = null)
 * @method ResearchGrant[]    findAll()
 * @method ResearchGrant[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ResearchGrantRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ResearchGrant::class);
    }

    public function save(ResearchGrant $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(ResearchGrant $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    /**
     * @return ResearchGrant[] Returns an array of ResearchGrant objects
     */
    public function findActiveGrants(): array
    {
        return $this->createQueryBuilder('r')
            ->andWhere('r.deadline > :now')
            ->setParameter('now', new \DateTime())
            ->orderBy('r.deadline', 'ASC')
            ->getQuery()
            ->getResult();
    }

    /**
     * @return ResearchGrant[] Returns an array of ResearchGrant objects
     */
    public function findByAmountRange(float $min, float $max): array
    {
        return $this->createQueryBuilder('r')
            ->andWhere('r.amount >= :min')
            ->andWhere('r.amount <= :max')
            ->setParameter('min', $min)
            ->setParameter('max', $max)
            ->orderBy('r.amount', 'DESC')
            ->getQuery()
            ->getResult();
    }
} 