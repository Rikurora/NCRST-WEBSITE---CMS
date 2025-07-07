<?php

namespace App\Repository;

use App\Entity\ResearchStatistics;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<ResearchStatistics>
 *
 * @method ResearchStatistics|null find($id, $lockMode = null, $lockVersion = null)
 * @method ResearchStatistics|null findOneBy(array $criteria, array $orderBy = null)
 * @method ResearchStatistics[]    findAll()
 * @method ResearchStatistics[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ResearchStatisticsRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ResearchStatistics::class);
    }

//    /**
//     * @return ResearchStatistics[] Returns an array of ResearchStatistics objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('r')
//            ->andWhere('r.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('r.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?ResearchStatistics
//    {
//        return $this->createQueryBuilder('r')
//            ->andWhere('r.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
