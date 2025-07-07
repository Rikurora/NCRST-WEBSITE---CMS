<?php

namespace App\Entity;

use App\Repository\IksInitiativeOutcomeRepository;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Metadata\ApiResource;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: IksInitiativeOutcomeRepository::class)]
#[ApiResource(
    normalizationContext: ['groups' => ['iks-initiative-outcome:read']],
    denormalizationContext: ['groups' => ['iks-initiative-outcome:write']]
)]
class IksInitiativeOutcome
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['iks-initiative-outcome:read'])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(['iks-initiative-outcome:read', 'iks-initiative-outcome:write'])]
    private ?string $title = null;

    #[ORM\Column(type: 'text', nullable: true)]
    #[Groups(['iks-initiative-outcome:read', 'iks-initiative-outcome:write'])]
    private ?string $description = null;

    #[ORM\ManyToOne(targetEntity: IksInitiative::class)]
    #[Groups(['iks-initiative-outcome:read', 'iks-initiative-outcome:write'])]
    private ?IksInitiative $initiative = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;
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

    public function getInitiative(): ?IksInitiative
    {
        return $this->initiative;
    }

    public function setInitiative(?IksInitiative $initiative): self
    {
        $this->initiative = $initiative;
        return $this;
    }
} 