<?php

namespace App\Repository;

use App\Entity\VacancyResponsibility;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<VacancyResponsibility>
 *
 * @method VacancyResponsibility|null find($id, $lockMode = null, $lockVersion = null)
 * @method VacancyResponsibility|null findOneBy(array $criteria, array $orderBy = null)
 * @method VacancyResponsibility[]    findAll()
 * @method VacancyResponsibility[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class VacancyResponsibilityRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, VacancyResponsibility::class);
    }

    public function save(VacancyResponsibility $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(VacancyResponsibility $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }
}