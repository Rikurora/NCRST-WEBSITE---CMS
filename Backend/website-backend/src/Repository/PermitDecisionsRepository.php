<?php

namespace App\Repository;

use App\Entity\PermitDecisions;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<PermitDecisions>
 *
 * @method PermitDecisions|null find($id, $lockMode = null, $lockVersion = null)
 * @method PermitDecisions|null findOneBy(array $criteria, array $orderBy = null)
 * @method PermitDecisions[]    findAll()
 * @method PermitDecisions[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PermitDecisionsRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PermitDecisions::class);
    }

//    /**
//     * @return PermitDecisions[] Returns an array of PermitDecisions objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('p')
//            ->andWhere('p.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('p.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?PermitDecisions
//    {
//        return $this->createQueryBuilder('p')
//            ->andWhere('p.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
