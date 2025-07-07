<?php

namespace App\Repository;

use App\Entity\InternshipDepartment;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<InternshipDepartment>
 *
 * @method InternshipDepartment|null find($id, $lockMode = null, $lockVersion = null)
 * @method InternshipDepartment|null findOneBy(array $criteria, array $orderBy = null)
 * @method InternshipDepartment[]    findAll()
 * @method InternshipDepartment[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class InternshipDepartmentRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, InternshipDepartment::class);
    }

    public function save(InternshipDepartment $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(InternshipDepartment $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }
} 