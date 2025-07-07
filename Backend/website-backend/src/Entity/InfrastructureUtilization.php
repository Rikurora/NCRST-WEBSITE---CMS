<?php

namespace App\Entity;

use App\Repository\InfrastructureUtilizationRepository;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass=InfrastructureUtilizationRepository::class)
 * @ApiResource(
 *     normalizationContext={"groups"={"infrastructure-utilization:read"}},
 *     denormalizationContext={"groups"={"infrastructure-utilization:write"}}
 * )
 */
class InfrastructureUtilization
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"infrastructure-utilization:read"})
     */
    private ?int $id = null;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"infrastructure-utilization:read", "infrastructure-utilization:write"})
     */
    private ?string $infrastructure_name = null;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"infrastructure-utilization:read", "infrastructure-utilization:write"})
     */
    private ?string $metric_name = null;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"infrastructure-utilization:read", "infrastructure-utilization:write"})
     */
    private ?string $value = null;

    /**
     * @ORM\Column(type="text", nullable=true)
     * @Groups({"infrastructure-utilization:read", "infrastructure-utilization:write"})
     */
    private ?string $description = null;

    /**
     * @ORM\Column(type="integer")
     * @Groups({"infrastructure-utilization:read", "infrastructure-utilization:write"})
     */
    private ?int $year = null;

    /**
     * @ORM\Column(type="datetime_immutable")
     * @Groups({"infrastructure-utilization:read", "infrastructure-utilization:write"})
     */
    private ?\DateTimeImmutable $created_at = null;

    /**
     * @ORM\Column(type="boolean")
     * @Groups({"infrastructure-utilization:read", "infrastructure-utilization:write"})
     */
    private ?bool $is_active = true;

    /**
     * @ORM\Column(type="integer", nullable=true)
     * @Groups({"infrastructure-utilization:read", "infrastructure-utilization:write"})
     */
    private ?int $display_order = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getInfrastructureName(): ?string
    {
        return $this->infrastructure_name;
    }

    public function setInfrastructureName(string $infrastructure_name): static
    {
        $this->infrastructure_name = $infrastructure_name;
        return $this;
    }

    public function getMetricName(): ?string
    {
        return $this->metric_name;
    }

    public function setMetricName(string $metric_name): static
    {
        $this->metric_name = $metric_name;
        return $this;
    }

    public function getValue(): ?string
    {
        return $this->value;
    }

    public function setValue(string $value): static
    {
        $this->value = $value;
        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): static
    {
        $this->description = $description;
        return $this;
    }

    public function getYear(): ?int
    {
        return $this->year;
    }

    public function setYear(int $year): static
    {
        $this->year = $year;
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
