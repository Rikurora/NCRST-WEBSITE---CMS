<?php

namespace App\Repository;

use App\Entity\CouncilMember;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<CouncilMember>
 *
 * @method CouncilMember|null find($id, $lockMode = null, $lockVersion = null)
 * @method CouncilMember|null findOneBy(array $criteria, array $orderBy = null)
 * @method CouncilMember[]    findAll()
 * @method CouncilMember[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CouncilMemberRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, CouncilMember::class);
    }

    public function save(CouncilMember $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(CouncilMember $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }
} 