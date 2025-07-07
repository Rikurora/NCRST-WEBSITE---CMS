<?php

namespace App\Repository;

use App\Entity\ImpactMetrics;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<ImpactMetrics>
 *
 * @method ImpactMetrics|null find($id, $lockMode = null, $lockVersion = null)
 * @method ImpactMetrics|null findOneBy(array $criteria, array $orderBy = null)
 * @method ImpactMetrics[]    findAll()
 * @method ImpactMetrics[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ImpactMetricsRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ImpactMetrics::class);
    }

//    /**
//     * @return ImpactMetrics[] Returns an array of ImpactMetrics objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('i')
//            ->andWhere('i.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('i.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?ImpactMetrics
//    {
//        return $this->createQueryBuilder('i')
//            ->andWhere('i.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
