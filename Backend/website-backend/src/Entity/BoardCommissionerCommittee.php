<?php

namespace App\Entity;

use App\Repository\BoardCommissionerCommitteeRepository;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Metadata\ApiResource;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: BoardCommissionerCommitteeRepository::class)]
#[ApiResource(
    normalizationContext: ['groups' => ['board-commissioner-committee:read']],
    denormalizationContext: ['groups' => ['board-commissioner-committee:write']]
)]
class BoardCommissionerCommittee
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['board-commissioner-committee:read'])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(['board-commissioner-committee:read', 'board-commissioner-committee:write'])]
    private ?string $name = null;

    #[ORM\Column(type: 'text', nullable: true)]
    #[Groups(['board-commissioner-committee:read', 'board-commissioner-committee:write'])]
    private ?string $description = null;

    #[ORM\ManyToOne(targetEntity: BoardCommissioner::class)]
    #[Groups(['board-commissioner-committee:read', 'board-commissioner-committee:write'])]
    private ?BoardCommissioner $commissioner = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;
        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): self
    {
        $this->description = $description;
        return $this;
    }

    public function getCommissioner(): ?BoardCommissioner
    {
        return $this->commissioner;
    }

    public function setCommissioner(?BoardCommissioner $commissioner): self
    {
        $this->commissioner = $commissioner;
        return $this;
    }
}