<?php

namespace App\Repository;

use App\Entity\Council;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Council>
 *
 * @method Council|null find($id, $lockMode = null, $lockVersion = null)
 * @method Council|null findOneBy(array $criteria, array $orderBy = null)
 * @method Council[]    findAll()
 * @method Council[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CouncilRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Council::class);
    }

    public function save(Council $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(Council $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }
}