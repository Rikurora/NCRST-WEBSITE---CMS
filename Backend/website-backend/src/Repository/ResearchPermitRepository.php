<?php

namespace App\Repository;

use App\Entity\ResearchPermit;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<ResearchPermit>
 *
 * @method ResearchPermit|null find($id, $lockMode = null, $lockVersion = null)
 * @method ResearchPermit|null findOneBy(array $criteria, array $orderBy = null)
 * @method ResearchPermit[]    findAll()
 * @method ResearchPermit[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ResearchPermitRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ResearchPermit::class);
    }

    public function save(ResearchPermit $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(ResearchPermit $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    /**
     * @return ResearchPermit[] Returns an array of ResearchPermit objects
     */
    public function findByStatus(string $status): array
    {
        return $this->createQueryBuilder('r')
            ->andWhere('r.status = :status')
            ->setParameter('status', $status)
            ->orderBy('r.submissionDate', 'DESC')
            ->getQuery()
            ->getResult();
    }

    /**
     * @return ResearchPermit[] Returns an array of ResearchPermit objects
     */
    public function findByApplicant(string $applicant): array
    {
        return $this->createQueryBuilder('r')
            ->andWhere('r.applicant = :applicant')
            ->setParameter('applicant', $applicant)
            ->orderBy('r.submissionDate', 'DESC')
            ->getQuery()
            ->getResult();
    }
} 