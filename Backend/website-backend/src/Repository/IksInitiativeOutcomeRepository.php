<?php

namespace App\Repository;

use App\Entity\IksInitiativeOutcome;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<IksInitiativeOutcome>
 *
 * @method IksInitiativeOutcome|null find($id, $lockMode = null, $lockVersion = null)
 * @method IksInitiativeOutcome|null findOneBy(array $criteria, array $orderBy = null)
 * @method IksInitiativeOutcome[]    findAll()
 * @method IksInitiativeOutcome[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class IksInitiativeOutcomeRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, IksInitiativeOutcome::class);
    }

    public function save(IksInitiativeOutcome $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(IksInitiativeOutcome $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }
} 