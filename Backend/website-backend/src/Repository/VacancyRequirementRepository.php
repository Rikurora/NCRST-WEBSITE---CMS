<?php

namespace App\Repository;

use App\Entity\VacancyRequirement;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<VacancyRequirement>
 *
 * @method VacancyRequirement|null find($id, $lockMode = null, $lockVersion = null)
 * @method VacancyRequirement|null findOneBy(array $criteria, array $orderBy = null)
 * @method VacancyRequirement[]    findAll()
 * @method VacancyRequirement[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class VacancyRequirementRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, VacancyRequirement::class);
    }

    public function save(VacancyRequirement $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(VacancyRequirement $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }
} 