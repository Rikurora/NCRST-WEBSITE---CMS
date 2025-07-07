<?php

namespace App\Repository;

use App\Entity\InnovationChallengeCategory;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<InnovationChallengeCategory>
 *
 * @method InnovationChallengeCategory|null find($id, $lockMode = null, $lockVersion = null)
 * @method InnovationChallengeCategory|null findOneBy(array $criteria, array $orderBy = null)
 * @method InnovationChallengeCategory[]    findAll()
 * @method InnovationChallengeCategory[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class InnovationChallengeCategoryRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, InnovationChallengeCategory::class);
    }

    public function save(InnovationChallengeCategory $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(InnovationChallengeCategory $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }
} 