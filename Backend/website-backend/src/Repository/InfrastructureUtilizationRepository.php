<?php

namespace App\Repository;

use App\Entity\InfrastructureUtilization;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<InfrastructureUtilization>
 *
 * @method InfrastructureUtilization|null find($id, $lockMode = null, $lockVersion = null)
 * @method InfrastructureUtilization|null findOneBy(array $criteria, array $orderBy = null)
 * @method InfrastructureUtilization[]    findAll()
 * @method InfrastructureUtilization[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class InfrastructureUtilizationRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, InfrastructureUtilization::class);
    }

//    /**
//     * @return InfrastructureUtilization[] Returns an array of InfrastructureUtilization objects
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

//    public function findOneBySomeField($value): ?InfrastructureUtilization
//    {
//        return $this->createQueryBuilder('i')
//            ->andWhere('i.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
