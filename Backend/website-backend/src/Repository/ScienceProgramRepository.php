<?php

namespace App\Repository;

use App\Entity\ScienceProgram;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<ScienceProgram>
 *
 * @method ScienceProgram|null find($id, $lockMode = null, $lockVersion = null)
 * @method ScienceProgram|null findOneBy(array $criteria, array $orderBy = null)
 * @method ScienceProgram[]    findAll()
 * @method ScienceProgram[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ScienceProgramRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ScienceProgram::class);
    }

    public function save(ScienceProgram $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(ScienceProgram $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }
} 