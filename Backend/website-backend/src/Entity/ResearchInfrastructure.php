<?php

namespace App\Entity;

use App\Repository\ResearchInfrastructureRepository;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass=ResearchInfrastructureRepository::class)
 * @ApiResource(
 *     normalizationContext={"groups"={"research-infrastructure:read"}},
 *     denormalizationContext={"groups"={"research-infrastructure:write"}}
 * )
 */
class ResearchInfrastructure
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"research-infrastructure:read"})
     */
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(['research-infrastructure:read', 'research-infrastructure:write'])]
    private ?string $name = null;

    #[ORM\Column(type: 'text')]
    #[Groups(['research-infrastructure:read', 'research-infrastructure:write'])]
    private ?string $description = null;

    #[ORM\Column(length: 255)]
    #[Groups(['research-infrastructure:read', 'research-infrastructure:write'])]
    private ?string $category = null;

    #[ORM\Column(length: 255)]
    #[Groups(['research-infrastructure:read', 'research-infrastructure:write'])]
    private ?string $location = null;

    #[ORM\Column(type: 'text', nullable: true)]
    #[Groups(['research-infrastructure:read', 'research-infrastructure:write'])]
    private ?string $specifications = null;

    #[ORM\Column(type: 'text', nullable: true)]
    #[Groups(['research-infrastructure:read', 'research-infrastructure:write'])]
    private ?string $usage_guidelines = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(['research-infrastructure:read', 'research-infrastructure:write'])]
    private ?string $contact_person = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(['research-infrastructure:read', 'research-infrastructure:write'])]
    private ?string $contact_email = null;

    #[ORM\Column(type: 'json', nullable: true)]
    #[Groups(['research-infrastructure:read', 'research-infrastructure:write'])]
    private ?array $images = null;

    #[ORM\Column(type: 'json', nullable: true)]
    #[Groups(['research-infrastructure:read', 'research-infrastructure:write'])]
    private ?array $documents = null;

    #[ORM\Column]
    #[Groups(['research-infrastructure:read', 'research-infrastructure:write'])]
    private ?\DateTimeImmutable $created_at = null;

    #[ORM\Column]
    #[Groups(['research-infrastructure:read', 'research-infrastructure:write'])]
    private ?bool $is_active = true;

    #[ORM\Column(nullable: true)]
    #[Groups(['research-infrastructure:read', 'research-infrastructure:write'])]
    private ?int $display_order = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): static
    {
        $this->name = $name;
        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): static
    {
        $this->description = $description;
        return $this;
    }

    public function getCategory(): ?string
    {
        return $this->category;
    }

    public function setCategory(string $category): static
    {
        $this->category = $category;
        return $this;
    }

    public function getLocation(): ?string
    {
        return $this->location;
    }

    public function setLocation(string $location): static
    {
        $this->location = $location;
        return $this;
    }

    public function getSpecifications(): ?string
    {
        return $this->specifications;
    }

    public function setSpecifications(?string $specifications): static
    {
        $this->specifications = $specifications;
        return $this;
    }

    public function getUsageGuidelines(): ?string
    {
        return $this->usage_guidelines;
    }

    public function setUsageGuidelines(?string $usage_guidelines): static
    {
        $this->usage_guidelines = $usage_guidelines;
        return $this;
    }

    public function getContactPerson(): ?string
    {
        return $this->contact_person;
    }

    public function setContactPerson(?string $contact_person): static
    {
        $this->contact_person = $contact_person;
        return $this;
    }

    public function getContactEmail(): ?string
    {
        return $this->contact_email;
    }

    public function setContactEmail(?string $contact_email): static
    {
        $this->contact_email = $contact_email;
        return $this;
    }

    public function getImages(): ?array
    {
        return $this->images;
    }

    public function setImages(?array $images): static
    {
        $this->images = $images;
        return $this;
    }

    public function getDocuments(): ?array
    {
        return $this->documents;
    }

    public function setDocuments(?array $documents): static
    {
        $this->documents = $documents;
        return $this;
    }

    public function getCreatedAt(): ?\DateTimeImmutable
    {
        return $this->created_at;
    }

    public function setCreatedAt(\DateTimeImmutable $created_at): static
    {
        $this->created_at = $created_at;
        return $this;
    }

    public function isActive(): ?bool
    {
        return $this->is_active;
    }

    public function setIsActive(bool $is_active): static
    {
        $this->is_active = $is_active;
        return $this;
    }

    public function getDisplayOrder(): ?int
    {
        return $this->display_order;
    }

    public function setDisplayOrder(?int $display_order): static
    {
        $this->display_order = $display_order;
        return $this;
    }
}
