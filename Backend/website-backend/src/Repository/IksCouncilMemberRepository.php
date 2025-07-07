<?php

namespace App\Repository;

use App\Entity\IksCouncilMember;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<IksCouncilMember>
 *
 * @method IksCouncilMember|null find($id, $lockMode = null, $lockVersion = null)
 * @method IksCouncilMember|null findOneBy(array $criteria, array $orderBy = null)
 * @method IksCouncilMember[]    findAll()
 * @method IksCouncilMember[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class IksCouncilMemberRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, IksCouncilMember::class);
    }

    public function save(IksCouncilMember $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(IksCouncilMember $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }
} 