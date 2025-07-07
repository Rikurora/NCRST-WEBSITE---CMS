<?php

namespace App\Repository;

use App\Entity\IksInitiative;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<IksInitiative>
 *
 * @method IksInitiative|null find($id, $lockMode = null, $lockVersion = null)
 * @method IksInitiative|null findOneBy(array $criteria, array $orderBy = null)
 * @method IksInitiative[]    findAll()
 * @method IksInitiative[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class IksInitiativeRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, IksInitiative::class);
    }

    public function save(IksInitiative $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(IksInitiative $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }
} 