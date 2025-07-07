<?php

namespace App\Repository;

use App\Entity\ResearchInfrastructure;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<ResearchInfrastructure>
 *
 * @method ResearchInfrastructure|null find($id, $lockMode = null, $lockVersion = null)
 * @method ResearchInfrastructure|null findOneBy(array $criteria, array $orderBy = null)
 * @method ResearchInfrastructure[]    findAll()
 * @method ResearchInfrastructure[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ResearchInfrastructureRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ResearchInfrastructure::class);
    }

//    /**
//     * @return ResearchInfrastructure[] Returns an array of ResearchInfrastructure objects
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

//    public function findOneBySomeField($value): ?ResearchInfrastructure
//    {
//        return $this->createQueryBuilder('r')
//            ->andWhere('r.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
