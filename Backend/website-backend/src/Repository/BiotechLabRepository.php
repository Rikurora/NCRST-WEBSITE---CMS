<?php

namespace App\Repository;

use App\Entity\BiotechLab;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<BiotechLab>
 *
 * @method BiotechLab|null find($id, $lockMode = null, $lockVersion = null)
 * @method BiotechLab|null findOneBy(array $criteria, array $orderBy = null)
 * @method BiotechLab[]    findAll()
 * @method BiotechLab[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class BiotechLabRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, BiotechLab::class);
    }

    public function save(BiotechLab $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(BiotechLab $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }
} 