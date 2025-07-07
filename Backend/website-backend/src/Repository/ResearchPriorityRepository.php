<?php

namespace App\Repository;

use App\Entity\ResearchPriority;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<ResearchPriority>
 *
 * @method ResearchPriority|null find($id, $lockMode = null, $lockVersion = null)
 * @method ResearchPriority|null findOneBy(array $criteria, array $orderBy = null)
 * @method ResearchPriority[]    findAll()
 * @method ResearchPriority[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ResearchPriorityRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ResearchPriority::class);
    }

    public function save(ResearchPriority $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(ResearchPriority $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }
} 