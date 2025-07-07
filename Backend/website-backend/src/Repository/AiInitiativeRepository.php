<?php

namespace App\Repository;

use App\Entity\AiInitiative;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<AiInitiative>
 *
 * @method AiInitiative|null find($id, $lockMode = null, $lockVersion = null)
 * @method AiInitiative|null findOneBy(array $criteria, array $orderBy = null)
 * @method AiInitiative[]    findAll()
 * @method AiInitiative[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class AiInitiativeRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, AiInitiative::class);
    }

    public function save(AiInitiative $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(AiInitiative $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }
} 