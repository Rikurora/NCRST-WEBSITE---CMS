<?php

namespace App\Repository;

use App\Entity\InternshipProgram;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<InternshipProgram>
 *
 * @method InternshipProgram|null find($id, $lockMode = null, $lockVersion = null)
 * @method InternshipProgram|null findOneBy(array $criteria, array $orderBy = null)
 * @method InternshipProgram[]    findAll()
 * @method InternshipProgram[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class InternshipProgramRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, InternshipProgram::class);
    }

    public function save(InternshipProgram $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(InternshipProgram $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }
}