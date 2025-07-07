<?php

namespace App\Repository;

use App\Entity\BiotechLabService;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<BiotechLabService>
 *
 * @method BiotechLabService|null find($id, $lockMode = null, $lockVersion = null)
 * @method BiotechLabService|null findOneBy(array $criteria, array $orderBy = null)
 * @method BiotechLabService[]    findAll()
 * @method BiotechLabService[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class BiotechLabServiceRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, BiotechLabService::class);
    }

    public function save(BiotechLabService $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(BiotechLabService $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }
} 