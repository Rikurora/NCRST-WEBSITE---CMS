<?php

namespace App\Repository;

use App\Entity\InnovationChallenge;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<InnovationChallenge>
 *
 * @method InnovationChallenge|null find($id, $lockMode = null, $lockVersion = null)
 * @method InnovationChallenge|null findOneBy(array $criteria, array $orderBy = null)
 * @method InnovationChallenge[]    findAll()
 * @method InnovationChallenge[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class InnovationChallengeRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, InnovationChallenge::class);
    }

    public function save(InnovationChallenge $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(InnovationChallenge $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }
} 