<?php

namespace App\Repository;

use App\Entity\NsfStatistics;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<NsfStatistics>
 *
 * @method NsfStatistics|null find($id, $lockMode = null, $lockVersion = null)
 * @method NsfStatistics|null findOneBy(array $criteria, array $orderBy = null)
 * @method NsfStatistics[]    findAll()
 * @method NsfStatistics[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class NsfStatisticsRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, NsfStatistics::class);
    }

//    /**
//     * @return NsfStatistics[] Returns an array of NsfStatistics objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('n')
//            ->andWhere('n.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('n.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?NsfStatistics
//    {
//        return $this->createQueryBuilder('n')
//            ->andWhere('n.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
