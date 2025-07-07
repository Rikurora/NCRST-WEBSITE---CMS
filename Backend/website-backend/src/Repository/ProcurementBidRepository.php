<?php

namespace App\Repository;

use App\Entity\ProcurementBid;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<ProcurementBid>
 *
 * @method ProcurementBid|null find($id, $lockMode = null, $lockVersion = null)
 * @method ProcurementBid|null findOneBy(array $criteria, array $orderBy = null)
 * @method ProcurementBid[]    findAll()
 * @method ProcurementBid[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ProcurementBidRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ProcurementBid::class);
    }

    public function save(ProcurementBid $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(ProcurementBid $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }
}